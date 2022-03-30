class Like < ApplicationRecord
  belongs_to :user
  has_one :match, dependent: :destroy

  

  def match_check
    liked_person = self.liked_person_id 
    matched_like = Like.where(user_id: liked_person, liked_person_id: self.user_id)
    if matched_like.length > 0
          match = Match.create(like_id: self.id)
          conversation = Conversation.create()
          chat = Chat.create(match_id: match.id, user_id: liked_person, conversation_id: conversation.id)
          chat2 = Chat.create(match_id: match.id, user_id: self.user_id, conversation_id: conversation.id)
          puts "match created"
        else return "this is not a match"
    end
  end

 

end
