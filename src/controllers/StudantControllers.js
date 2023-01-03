import Studant from "../models/ModelStudent.js";

class StudantController {

    async index(req, res) {
        const studants = await Studant.find();
        return res.json({ studants });
    }

    async create(req, res) {
        try {
            const { name, birth, registry, scores } = req.body;
            
            const studant = await Studant.findOne({ name, registry});

            if (studant) {
                return res.status(422).json({ message: `Studant ${name} already exists.` });
            }

            const newStudant = await Studant.create({ name, birth, registry, scores });

            return res.status(200).json(newStudant);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;

            const studant = await Studant.findById(id);

            if (!studant) {
                return res.status(404).json({ message: `Id was not found.` })
            }

            return res.status(200).json(studant);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const studant = await Studant.findById(id);

            if (!studant) { return res.status(404).json({ message: "ID not found." }); }

            const newStudant = await Studant.findOne({ name });

            if (newStudant) {
                return res.status(422).json({ message: "Already a studant with this name." })
            }

            await studant.updateOne({ name });
            return res.status(201).json({ message: "Studant updated." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const studant = await Studant.findById(id);

            if (!studant) { return res.status(404).json({ message: "ID not found." }); }

            await studant.deleteOne();

            return res.status(200).json({ message: "Studant deleted." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

}

export default new StudantController();