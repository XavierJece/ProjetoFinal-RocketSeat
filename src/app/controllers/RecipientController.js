import axios from 'axios';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async store(req, res) {
        const zip = new RegExp('\\d{5}[-]\\d{2}');

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().positive(),
            complement: Yup.string(),
            city: Yup.string().required(),
            state: Yup.string()
                .required()
                .length(2),
            zip_code: Yup.string()
                .matches(zip)
                .length(9)
                .required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const apiResponse = (
            await axios.get(
                `https://viacep.com.br/ws/${req.body.zip_code}/json/`
            )
        ).data;

        if (apiResponse.length < 1) {
            return res
                .status(400)
                .json({ error: 'Zip code does not exist :/' });
        }

        if (apiResponse.logradouro !== '') {
            req.body.street = apiResponse.logradouro;
        }

        if (apiResponse.localidade !== '') {
            req.body.city = apiResponse.localidade;
        }

        if (apiResponse.uf !== '') {
            req.body.state = apiResponse.uf;
        }

        const recipientExists = await Recipient.findOne({
            where: {
                street: req.body.street,
                number: req.body.number,
                complement: req.body.complement,
                city: req.body.city,
                state: req.body.state,
            },
        });

        if (recipientExists) {
            return res
                .status(400)
                .json({ error: 'Recipient already exists :/' });
        }

        const recipient = await Recipient.create(req.body);

        return res.json({
            recipient,
        });
    }

    async update(req, res) {
        console.log('Duvida');
    }
}

export default new RecipientController();
