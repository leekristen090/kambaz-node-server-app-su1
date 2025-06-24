import model from "./model.js";

// export function enrollUserInCourse(user, course) {
//     const newEnrollment = { user, course, _id: `${user}-${course}` };
//     return model.create(newEnrollment);
// }
export async function enrollUserInCourse(user, course) {
    try {
        const existing = await model.findOne({ user, course });
        if (existing) {
            return existing;
        }
        const newEnrollment = { user, course, _id: `${user}-${course}` };
        return await model.create(newEnrollment);
    } catch (error) {
        if (error.code === 11000) {
            return model.findOne({user, course});
        }
        throw error;
    }
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}
export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    // console.log("Enrollments:", enrollments);
    return enrollments.map((enrollment) => enrollment.user);
    // return model.find({course: courseId});
}
export async function deleteEnrollmentsForCourse(courseId) {
    return model.deleteMany({course: courseId});
}
export async function deleteEnrollmentsForUser(userId) {
    return model.deleteMany({user: userId});
}