from pydantic import BaseModel


class teacher(BaseModel):
    name: str
    age: int
    gender: str
    batches : list[str]
    department : str