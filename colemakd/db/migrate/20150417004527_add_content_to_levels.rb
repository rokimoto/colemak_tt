class AddContentToLevels < ActiveRecord::Migration
  def change
    add_column :levels, :content, :text
  end
end
