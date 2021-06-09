# Firebase Script Directory
---
## Write Scripts

### No Diet
<p>
  <strong> firebase_add.py </strong> is a single collection add script. It can be used to add a single collection in the database with the number of documents that you want to add. 
  USAGE python firebase_add.py file_path collection_name 
  
 <strong> firebase_add_dir.py </strong> is a muliple collection add script. It can be used to add multiple collections with the number of desired documents to your database. It will run through all the files in the given directory and create a collection per file. 
  USAGE python firebase_add_dir.py directory
</p>

### Diet
<p>
  <strong> firebase_add_diet.py </strong> is a single collection add script. It can be used to add a single collection in the database with the number of documents that you want to add. This will add a diet-specific collection to the document that you are adding to.  
  USAGE python firebase_add_diet.py file_path collection_name diet 
  
 <strong> firebase_add_dir_diet.py </strong> is a muliple collection add script. It can be used to add multiple collections with the number of desired documents to your database. It will run through all the files in the given directory and create a collection per file. This will add diet specific collections to the database or document you are adding to. 
  USAGE python python firebase_add_dir_diet.py directory diet
</p>
---

## Update Scripts
<p>
   <strong> updatefirebase.py </strong> is a single collection update script. It can be used to update a single collection in the database with the number of documents that you want to add. The specific collection needs to be specified. 
  USAGE python updatefirebase.py file_path collection_name diet 
  
 <strong> updatefirebase_dir.py </strong> is a muliple collection update script. It can be used to update multiple collections with the number of desired documents to your database. It will run through all the files in the given directory and update the specified diet collection in each document or database.  
  USAGE python python updatefirebase_dir.py directory diet
</p>
---
