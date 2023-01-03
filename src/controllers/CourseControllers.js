import Course from "../models/ModelCourse.js"

class CourseController {
    async index(req, res) {
        const courses = await Course.find();
        return res.json({ courses });
    }

    async create(req, res) {
        try {
            const { name } = req.body;
            const course = await Course.findOne({ name });

            if (course) {
                return res.status(422).json({ message: `Course ${name} already exists.` });
            }

            const newCourse = await Course.create({ name });

            return res.status(200).json(newCourse);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;

            const course = await Course.findById(id);

            if (!course) {
                return res.status(404).json({ message: `The id: ${id} was not found.` })
            }

            return res.status(200).json(course);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const course = await Course.findById(id);

            if (!course) { return res.status(404).json({ message: "Course ID not found." }); }

            const newCourse = await Course.findOne({ name });

            if (newCourse) {
                return res.status(422).json({ message: "Already redy a course with this name." })
            }

            await course.updateOne({ name });
            return res.status(201).json({ message: "Course updated." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const course = await Course.findById(id);

            if (!course) { return res.status(404).json({ message: "Course ID not found." }); }

            await course.deleteOne();

            return res.status(200).json({ message: "Course deleted." })

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }



}

export default new CourseController();