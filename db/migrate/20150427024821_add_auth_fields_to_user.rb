class AddAuthFieldsToUser < ActiveRecord::Migration
  def change
    rename_column :users, :first_name, :name
    remove_column :users, :last_name
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :oauth_token, :string
    add_column :users, :oauth_expires_at, :datetime

  end
end
