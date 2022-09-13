class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :vote_average
      t.string :overview
      t.string :release_date
      t.string :poster_path
    end
  end
end
