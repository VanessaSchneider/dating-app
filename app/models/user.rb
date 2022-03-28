class User < ApplicationRecord
  has_many :likes 
  has_many :matches, through: :likes
  has_secure_password
end
