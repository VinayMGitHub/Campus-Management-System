from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from models import student_model

router = APIRouter(
    prefix="/students",
    tags = ["student"],
)

# class Student(BaseModel):
#     name: str
#     age: int

# students_list = [{"name" : "Vinay", "age" : 21}, {"name" : "Manu", "age" : 22}, {"name" : "Sreevardhan", "age" : 23}, {"name" : "Ajith", "age" : 24}]

@router.get("/")
def read_students():
    pass
    # return students_list

@router.get("/{name}")
def read_students(name :str):
    # students_with_requested_age = [student for student in students_list if student["name"] == name]
    # return students_with_requested_age
    pass

@router.post("/")
def add_student(student : student_model.student):
    pass
    # print(type(student))
    # new_student = student.dict()
    # students_list.append(new_student)
    # return new_student
