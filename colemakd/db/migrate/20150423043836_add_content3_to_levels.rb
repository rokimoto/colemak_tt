class AddContent3ToLevels < ActiveRecord::Migration
  def change
    add_column :levels, :content3, :string
    add_column :levels, :content4, :string
    add_column :levels, :content5, :string
  end
end
