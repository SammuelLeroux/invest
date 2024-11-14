from fastapi import FastAPI
from .database import engine, Base
from . import models

# Créer les tables dans la base de données
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}