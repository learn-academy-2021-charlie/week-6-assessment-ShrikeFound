# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

## 1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

**Your answer:**

Since we want to make a change to the database structure, we'd start my creating a migration. We'd add a column to the sightings table using something like:

```ruby
def change
  add_column :sightings, :animal_id, :integer
end
```

**Researched answer:** we'd also want to check to make sure we added the relation to the model. We'd add `belongs_to :animal` to the sighting model. We could also add a foreign key contraint with the name of the tables:

```ruby
def change
  add_foreign_key :sightings, :animals
end
```

a foreign key restraint isn't required, but adding one provides another layer of protection. You won't be able to remove an animal record if it is required by a sighting. Without the constraint, you might remove an animal record another sighting record requires to be valid.

## 2. Which RESTful API routes must always be passed params? Why?

**Your answer:**

The restful api routes are: `index`,`show`,`create`,`update`,`destroy`. The `show`,`update`,and `destroy` routes affect specific records, so we'd need to have at least the id of the record as a parameter for these.

**Researched answer:**

the `update` route and `create` route both require something in the body or `params.require(:animal)` will give us an error. In that way, all of the routes except for `index` require something from the request.

## 3. Name three rails generator commands. What is created by each?

**Your answer:**

Three rails generator commands are:

- `rails g model`: generates a model file for the model specified, along with a migration for the table in the database.
- `rails g migration`: generates a migration that we can use to modify the database. I know you can pass modifiers but I'm not sure exactly how that works.
- `rails g controller`: generates a controller file where we can add actions that affect the related model.

**Researched answer:**

We've also got the resource controller (`rails g resource`) that will generate the same stuff that both the model and controller generators create, plus resources in the routes file. We could go a step further and use `rails g scaffold`, which will generate all the same things, along with the appropriate methods in the controller and the corresponding view files.

## 4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

#### method="GET" /students

The `#index` method gets all students and passes them to the index view

#### method="POST" /students

The `#create` method creates a new student with the passed paramters.

#### method="GET" /students/new

The `#new` method renders a form for a new student that the user can fill out.

#### method="GET" /students/2

The `#show` method gets the student with the specified index (2) and passes it to the show index.

#### method="GET" /students/edit/2

The `#edit` method gets the student with the specified index (2) and renders a form that a user can use to modify student information.

#### method="PATCH" /students/2

The `#update` method updates information for the student with an id 2.

#### method="DELETE" /students/2

The `#destroy` method deletes the student with an id of 2.

## 5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

> A key component of agile software development is putting people first, and a user story puts end users at the center of the conversation.

Story formula is as follows:

> “As a \[persona\], I [want to], [so that].”

### User Stories for the to-do app

1. As a user, I want to... view my tasks as a list, so that I can keep track of what i'm currently working on and what's next.
2. As a user, I can have a form for a new task's attributes
3. As a user, I can submit my form and have it added to the bottom of my list
4. As a user, I can mark a task as done
5. As a user, I can see my completed tasks at the bottom of the list
6. As a user, I can remove a task
7. As a user, I can edit a task
8. As a user, I can change a task's color
9. As a user, I can click an drag a task to a new location
10. As a user, I can leave the page and return to see the same list
