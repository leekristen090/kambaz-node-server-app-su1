import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function updateAssignment(assignmentId, assignmentUpdates) {
    // const {assignments} = Database;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
    return model.updateOne({_id: assignmentId}, assignmentUpdates);
}
export function createAssignment(assignment) {
    const newAssignment = {...assignment, _id: uuidv4()};
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
    return model.create(newAssignment);
}
export function findAssignmentsForCourse(courseId) {
    // const {assignments} = Database;
    // return assignments.filter((assignment) => assignment.course === courseId);
    return model.find({course: courseId});
}
export function findAssignmentById(assignmentId) {
    // const {assignments} = Database;
    // return assignments.find((assignment) => assignment._id === assignmentId);
    return model.findOne({_id: assignmentId});
}
export function deleteAssignment(assignmentId) {
    // const {assignments} = Database;
    // return Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({_id: assignmentId});
}