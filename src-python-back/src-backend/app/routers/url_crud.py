import string
from random import choice
from typing import Type, Union

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

import app.routers.url_schemas as url_schemas
from ..models.url import Url


def get_url_by_short(db: Session, short_url: str) -> Type[Url] | None:
    return db.query(Url).filter(Url.short_url_path == short_url).first()


def generate_short_id(num_of_chars: int):
    """Function to generate short_id of specified number of characters"""
    return ''.join(choice(string.ascii_letters + string.digits) for _ in range(num_of_chars))


def create_url(db: Session, url: str) -> Union[Url, None]:
    random_str = generate_short_id(5)
    db_url = Url(full_url=url,
                 short_url_path=random_str)
    db.add(db_url)
    try:
        db.commit()
        db.refresh(db_url)
    except IntegrityError as err:
        db.rollback()
        return None

    return db_url
