import Course from "../models/ModelCourse.js";
import Subject from "../models/ModelSubject.js";

class SubjectController {
    async index(req, res) {
        const subjects = await Subject.find();
        return res.json({ subjects });
    }

    async create(req, res) {
        try {
            const { name, semester, course } = req.body;
            const subject = await Subject.findOne({ name, semester, course });

            if (subject) {
                return res.status(422).json({ message: `Subject ${name} already exists.` });
            }

            const checkCourse = await Course.findById(course);

            if (!checkCourse) {
                return res.status(404).json({ message: `Course not found.` });
            }

            const newSubject = await Subject.create({ name, semester, course });

            return res.status(200).json(newSubject);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;

            const subject = await Subject.findById(id);

            if (!subject) {
                return res.status(404).json({ message: `Id was not found.` })
            }

            return res.status(200).json(subject);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const subject = await Subject.findById(id);

            if (!subject) { return res.status(404).json({ message: "Subject ID not found." }); }

            const newSubject = await Subject.findOne({ name });

            if (newSubject) {
                return res.status(422).json({ message: "Already redy a Subject with this name." })
            }

            await subject.updateOne({ name });
            return res.status(201).json({ message: "Subject updated." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const subject = await Subject.findById(id);

            if (!subject) { return res.status(404).json({ message: "Subject ID not found." }); }

            await subject.deleteOne();

            return res.status(200).json({ message: "Subject deleted." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

}

export default new SubjectController();