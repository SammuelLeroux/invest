from sqlalchemy.orm import Session
from .. import models
from ..schemas import userSchema

def create_user(db: Session, user: userSchema.UserCreate):
    db_user = models.User(email=user.email, hashed_password=user.hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_users(db: Session, skip: int = 0):
    return db.query(models.User).offset(skip).all()

def update_user(db: Session, user_id: int, user: userSchema.UserCreate):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user:
        db_user.email = user.email
        db.commit()
        db.refresh(db_user)
        return db_user
    
def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
        return True