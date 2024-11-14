from sqlalchemy import Column, Integer, String, Float, ForeignKey, Date
from sqlalchemy.orm import relationship
from .database import Base

# Modèle de la table Users
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

    # Relation avec les transactions
    transactions = relationship("Transaction", back_populates="owner")


# Modèle de la table Transactions
class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    type = Column(String)  # 'crypto' ou 'bourse'
    name = Column(String)  # 'ETH', 'USDT', ...
    action = Column(String)  # 'achat', 'vente', 'swap'
    date = Column(Date)
    quantity = Column(Float)  # Quantité de l'actif (par exemple, nombre de cryptos)
    charge_percents = Column(Float)  # Charge en pourcentage
    total_amount = Column(Float)  # Montant total de la transaction

    # Relation avec la table Users
    owner = relationship("User", back_populates="transactions")
