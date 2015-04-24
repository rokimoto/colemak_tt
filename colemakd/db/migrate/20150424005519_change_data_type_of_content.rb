class ChangeDataTypeOfContent < ActiveRecord::Migration
  def change
    change_column :levels, :content, :string
    change_column :levels, :content2, :string 
  end
end
