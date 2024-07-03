from pydantic import BaseModel


class student(BaseModel):
    name: str
    age: int
    roll_no: int
    gender: str
    semester: int
    department : str
    batch : str