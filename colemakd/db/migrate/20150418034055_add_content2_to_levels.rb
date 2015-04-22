class AddContent2ToLevels < ActiveRecord::Migration
  def change
    add_column :levels, :content2, :text
  end
end
