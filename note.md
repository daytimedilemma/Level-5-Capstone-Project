# Git Hub notes

# Only work on branches, never code directly on main

# git Branch

    * git branch 


# git checkout

    * How you move to a branch

# git merge 

    * Combines(pushes) to main branch

# Connect/clone locally
    * Set up the code base
    * git add -A
    * git commit -m "initial commit"
    * git push
~~
# Clone repo
 -git clone <pasted command on github>

# Never code on your master branch(You'll see a green master if you are in the master)

# Create branches per feature example 
    - git branch <branch name> ex: server-setup
# Checkout to that branch 
    -git checkout server-setup

# Commit and push branch to github
    * git add -A
    * git commit -m "initial commit"
    * git push (no upstream origin)
    * paste suggested push command 

# git checkout master

# Pull down remote master 
    * git pull (updates your code that everyone else has)

# Checkout back to local branch
    * git checkout server-setup

# Merge master into local branch (This is where it's good if something goes wrong)
    * git merge --no-ff master
    * Two things might happen
        * Things will go well 
        * You'll see someothing like ######
        * command to run if it goes well, run command 'shift + zz' (End merge process )

        * If things go badly
        * We have to find code that doesn't match and input the correct one
        * Files will be highlighted in different colors for current code and incoming changes 
        ** Resolve conflicts locally
        ** Push to git hub 

# Push to git hub
    * git add -A
    * git commit -m "initial commit"
    * git push 

# Create Pull request on git hub'

# Git Checkout to master and git pull
    


