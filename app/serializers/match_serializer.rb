class MatchSerializer < ActiveModel::Serializer
  attributes :id, :like_id, :message

  belongs_to :like
  has_many :chats
  has_many :conversations
  has_many :messages
end
