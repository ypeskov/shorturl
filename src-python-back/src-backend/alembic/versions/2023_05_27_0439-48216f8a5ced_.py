"""empty message

Revision ID: 48216f8a5ced
Revises: 8269c75d6837
Create Date: 2023-05-27 04:39:00.765776+00:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '48216f8a5ced'
down_revision = '8269c75d6837'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('urls', 'short_url_prefix')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('urls', sa.Column('short_url_prefix', sa.VARCHAR(), server_default=sa.text("'/urls/r'::character varying"), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
