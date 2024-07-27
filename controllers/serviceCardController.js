const ServiceCard = require('../modals/serviceCardModel');
const mongoose = require('mongoose');



//working code
exports.createServiceCard = async (req, res) => {
  try {
    const { heading, description, imageurl } = req.body;
    const newServiceCard = new ServiceCard({ heading, description, imageurl });
    await newServiceCard.save();
    res.status(201).json({
      message: `Service card created successfully with heading: ${newServiceCard.heading}`,
      newServiceCard,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ServiceCard.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getServiceCard = async (req, res) => {
  try {
    const serviceCard = await ServiceCard.findById(req.params.id);
    if (!serviceCard) {
      return res.status(404).json({ error: 'Service Card not found' });
    }
    res.json(serviceCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



//working code
exports.getAllServiceCards = async (req, res) => {
  try {
    const serviceCards = await ServiceCard.find();
    res.status(200).json(serviceCards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching service cards', error });
  }
};
//working code
exports.updateServiceCard = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedCard = await ServiceCard.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedCard) {
      return res.status(404).json({ message: 'Service card not found' });
    }
    res.status(200).json({
      message: `Service card updated successfully with heading: ${updatedCard.heading}`,
      updatedCard
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


