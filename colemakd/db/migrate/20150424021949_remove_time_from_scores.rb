class RemoveTimeFromScores < ActiveRecord::Migration
  def change
    remove_column :scores, :time
  end
end
