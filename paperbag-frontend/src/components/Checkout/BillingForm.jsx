function BillingForm({ form, handleChange, errors }) {
  return (
    <section className="billing-section">
      <h2>Billing Details</h2>

      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className={errors.firstName ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className={errors.lastName ? "error" : ""}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Company Name (optional)</label>
        <input type="text" name="company" value={form.company} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>City *</label>
        <input type="text" value="Kathmandu" disabled />
      </div>

      <div className="form-group">
        <label>Street Address *</label>
        <input
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          className={errors.street ? "error" : ""}
        />
      </div>

      <div className="form-group">
        <label>Near Landmark (optional)</label>
        <input type="text" name="landmark" value={form.landmark} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Phone *</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className={errors.phone ? "error" : ""}
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
      </div>

      <div className="form-group">
        <label>Order Notes (optional)</label>
        <textarea
          name="notes"
          rows="4"
          value={form.notes}
          onChange={handleChange}
        ></textarea>
      </div>
    </section>
  );
}

export default BillingForm;
