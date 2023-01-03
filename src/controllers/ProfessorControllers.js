import Professor from "../models/ModelProfessor.js";

class ProfessorController {
    async index(req, res) {
        const professors = await Professor.find();
        return res.json({ professors });
    }

    async create(req, res) {
        try {
            const { name, birth, salary } = req.body;
            const professor = await Professor.findOne({ name });

            if (professor) {
                return res.status(422).json({ message: `Professor ${name} already exists.` });
            }

            const newProfessor = await Professor.create({ name, birth, salary });

            return res.status(200).json(newProfessor);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;

            const professor = await Professor.findById(id);

            if (!professor) {
                return res.status(404).json({ message: `Id was not found.` })
            }

            return res.status(200).json(professor);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const professor = await Professor.findById(id);

            if (!professor) { return res.status(404).json({ message: "ID not found." }); }

            const newProfessor = await Professor.findOne({ name });

            if (newProfessor) {
                return res.status(422).json({ message: "Already a Professor with this name." })
            }

            await professor.updateOne({ name });
            return res.status(201).json({ message: "Professor updated." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const professor = await Professor.findById(id);

            if (!professor) { return res.status(404).json({ message: "ID not found." }); }

            await professor.deleteOne();

            return res.status(200).json({ message: "Professor deleted." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

}

export default new ProfessorController();