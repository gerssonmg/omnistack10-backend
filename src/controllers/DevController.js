const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy
//index: lista do recurso
//show: mostrar unico recurso
//store: quer criar
//update: alterar
//delete: apagar

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });
        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            })
        }


        return response.json(dev);
    },


    async update(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async destroy(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    }
};