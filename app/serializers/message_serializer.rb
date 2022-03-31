class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id

  belongs_to :conversation
    # has_many :chats
    # has_many :users
end
