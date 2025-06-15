// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
// export function enrollUserInCourse(userId, courseId) {
//     const {enrollments} = Database;
//     enrollments.push({_id: uuidv4(), user: userId, course: courseId});
// }
export function enrollUserInCourse(user, course) {
    // const {enrollments} = Database;
    // const newEnrollment = {_id: uuidv4(), user: userId, course: courseId};
    // enrollments.push(newEnrollment);
    // return newEnrollment;
    const newEnrollment = {user, course, _id: `${user}-${course}`};
    return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
    // const { enrollments } = Database;
    // const initialLength = enrollments.length;
    // Database.enrollments = enrollments.filter(
    //     e => !(e.user === userId && e.course === courseId)
    // );
    // return initialLength !== Database.enrollments.length;
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