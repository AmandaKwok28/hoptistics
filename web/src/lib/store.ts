import { atom } from "nanostores";

export const $instructorName = atom("");
export function setInstructorName(name: string) {
    $instructorName.set(name);
}

export const $semester = atom("");
export function setSemester(sem: string) {
    $semester.set(sem);
}

export const $year = atom("");
export function setYear(year: string) {
    $year.set(year);
}

export const $department = atom("");
export function setDepartment(dept: string) {
    $department.set(dept);
}

export const $classNumber = atom("");
export function setClassNumber(num: string) {
    $classNumber.set(num);
}

export const $excludePNP = atom(false);
export function setExcludePNP(bool: boolean) {
    $excludePNP.set(bool);
}

export const $excludeCovid = atom(false);
export function setExcludeCovid(bool: boolean) {
    $excludeCovid.set(bool);
}

export const $upperDivOnly = atom(false);
export function setUpperDivOnly(bool: boolean) {
    $upperDivOnly.set(bool);
}

export const $lowerDivOnly = atom(false);
export function setLowerDivOnly(bool: boolean) {
    $lowerDivOnly.set(bool);
}
    