#pull official base image
FROM python:3.9.5-slim-buster

#set Working directory
WORKDIR /usr/src/app

#set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

#install psycopg2 dependencies
RUN apt-get update \
    && apt-get -y install postgresql libpq-dev postgresql-client postgresql-client-common \
    && apt-get -y install  gcc python3-dev musl-dev 
    

#install dependencies
RUN pip install --upgrade pip 
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

#copy project
COPY . /usr/src/app/

#run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]