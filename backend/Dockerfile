FROM python:3.12

WORKDIR /app

COPY ./app /app

RUN pip install fastapi[all] sqlalchemy psycopg2

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]