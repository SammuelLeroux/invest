from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ...schemas.userSchema import UserResponse, UserCreate
from ...crud.users import create_user, get_user
from ...database import SessionLocal

router = APIRouter()

@router.post("/users/", response_model=UserResponse)
def create_user_endpoint(user: UserCreate, db: Session = Depends(SessionLocal)):
    return create_user(db=db, user=user)

@router.get("/users/{user_id}", response_model=UserResponse)
def read_user(user_id: int, db: Session = Depends(SessionLocal)):
    return get_user(db=db, user_id=user_id)