class User < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :matches, through: :likes
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  def dependent_match_destroy
    like = Like.all
    delete_like= Like.where(liked_person_id: self.id)
    delete_like.map{|m| m.destroy}
  end
end
