class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :wpm
      t.datetime :time
      t.belongs_to :user
      t.belongs_to :level

      t.timestamps null: false
    end
  end
end
