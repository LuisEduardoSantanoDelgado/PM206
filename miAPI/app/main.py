from fastapi import FastAPI
from app.routers import usuarios
from app.data.db import engine
from app.data import usuarioDB
from fastapi.middleware.cors import CORSMiddleware

usuarioDB.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API usuarios ",
    description="Ivan Isay Guerra",
    version="1.0.0"
)
app.include_router(usuarios.router)

origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(usuarios.router)