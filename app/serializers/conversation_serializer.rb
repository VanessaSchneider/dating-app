class ConversationSerializer < ActiveModel::Serializer
  attributes :id

  has_many :chats
  has_many :users
  has_many :messages

end
