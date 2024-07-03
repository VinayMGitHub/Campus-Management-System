from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

student_router = APIRouter(
    prefix="/students",
    tags = ["student"],
)

class Student(BaseModel):
    name: str
    age: int

students_list = [{"name" : "Vinay", "age" : 21}, {"name" : "Manu", "age" : 22}, {"name" : "Sreevardhan", "age" : 23}, {"name" : "Ajith", "age" : 24}]

@student_router.get("/")
def read_students():
    return students_list

@student_router.get("/{name}")
def read_students(name :str):
    students_with_requested_age = [student for student in students_list if student["name"] == name]
    return students_with_requested_age

@student_router.post("/")
def add_student(student : Student):
    print(type(student))
    new_student = student.dict()
    students_list.append(new_student)
    return new_student
