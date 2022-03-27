class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      # t.belongs_to :user, null: false, foreign_key: true
      # t.integer :liked_person_id
      # t.belongs_to :match, null: false, foreign_key: true
      t.integer :disliked_person_id
      t.integer :liked_person_id
      t.integer :user_id
      t.timestamps
    end
  end
end
