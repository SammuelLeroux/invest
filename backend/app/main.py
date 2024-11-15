from fastapi import FastAPI
from .api.endpoints import users
from .database import engine, Base
from . import models

# Créer les tables dans la base de données
# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Track Invest"}