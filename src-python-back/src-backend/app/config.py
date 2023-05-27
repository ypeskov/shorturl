from pydantic import BaseSettings


class Settings(BaseSettings):
    db_user: str = 'urlshortener'
    db_password: str = 'urlshortener'
    db_host: str = 'db'
    db_name: str = 'urlshortener'

    class Config:
        # `.env.prod` takes priority over `.env`
        env_file = '.env', '.env.local', '.env.prod' 
