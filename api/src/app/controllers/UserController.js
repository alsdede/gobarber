import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required('name is required'),
      email: Yup.string()
        .email('Pass a valid email')
        .required('email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider, admin } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
      admin,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email('pass a valid email'),
      oldPassword: Yup.string().min(
        6,
        'the password must contain more than 6 digits'
      ),
      password: Yup.string()
        .min(6, 'the password must contain more than 6 digits')
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required('old password is required') : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field
              .required('You must confirm the password')
              .oneOf([Yup.ref('password')])
          : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider, admin } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
      admin,
    });
  }
}

export default new UserController();
