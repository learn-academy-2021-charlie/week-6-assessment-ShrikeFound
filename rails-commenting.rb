# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#defines a BlogPostController class that inherits from the ApplicationsController. We'll have all our actions in here.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #declares an instance variable `posts` with all of our blog_post objects.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #declares an instance variable 'post' with a single post object that 
    #has an id that matches the incoming 'id' parameter    
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #defines a new method that the router will point us to. It creates
  #a new instance variable 'post' with the value of a new post;
  def new
    @post = Post.new
  end

  def create
    # ---5)
    #creates an instance variable 'post' that holds the value of a (possibly) newly created post_post object.
    # the object is created using the incoming parameters as its attributes.
    # if the resulting object is valid, we are redirected to the show route with the created post as a parameter.
    # if not, we are redirected to the new route.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #defines an 'edit' method that declares an instance variable
  # 'post' with the blog_post object with the appropriate id. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #updates the object we found above with the incoming parameters.
    #should mention that 'blog_post_params' is actually a method we define below 
    #and that we'll talk about on 10.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #uses the rails helper method 'redirect_to' to...redirect us to the
      #blog_post_path (which is an alias for the show route) with @post as the parameter
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # a keyword that says any methods defined below 
  # are only accessible within this class
  private
  def blog_post_params
    # ---10)
    #params seems to be a method that creates an instance of:
    # ActionController::Parameters (a class)
    # it's from this class that we get the require and permit method.
    # require checks to see if a certain parameter is included
    # permit removes any parameters that aren't within it
    #implicit return means that these new parameters are returned and used
    # as the parameters for updates and creates instead of the raw parameters.
    params.require(:blog_post).permit(:title, :content)
  end
end
