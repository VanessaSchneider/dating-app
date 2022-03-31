class Match < ApplicationRecord
  belongs_to :like
  has_many :chats, dependent: :destroy
  has_many :conversations, through: :chats
  has_many :messages, through: :conversations

end

#do fetch
  #Return
  # : {
  #   match id: 1
  #   message:
  #   current_user_id: 2
  #   matched_person: {
  #     user_id:
  #     image:
  #     bio:
  #   }
  # }