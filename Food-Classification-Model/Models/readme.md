# Models
All the models were written using Python Keras and done in Jupyter Notebook.

---

## Large Dataset Model
---

<p>
Food-Identifier.ipynb is the model that we trained on a larger dataset. This dataset had over 450K images with 755 uniques dishes/classes. This dataset is a conglomeration of various datasets from Kaggle and other sources. This model takes about 3 days to train with 25 epochs on CPU. We decided to go with a reduced dataset after we decided that the training time for this model was too long. 
</p>

---
## Reduced Dataset Model 
---

<p>
Food-Identifier-Reduced-23.ipynb is the 23 model that we trained for our dataset. This model was trained on the MAFood121 dataset from the University of Barcelona.<sup>1</sup> This model trained at about 70% validation accuracy. This model can identify 121 unique dishes and was trained on a dataset of 12K images.  
  
  Dataset: http://www.ub.edu/cvub/mafood121/
</p>

---
## TFLITE Model
---

<p>
To work with Android and React Native we had to convert our Keras model to a Tensorflow Lite model so that it could be integrated into our App.
</p>

---

1: E. Aguilar, M. Bolaños, P. Radeva, Regularized Uncertainty-based Multi-Task LearningModel for Food Analysis, J. Vis. Commun. Image R. (2019), doi: https://doi.org/10.1016/j.jvcir.2019.03.011
