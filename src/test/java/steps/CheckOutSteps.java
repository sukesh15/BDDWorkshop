package steps;

import cucumber.api.java.en.And;
import pages.BillingPage;
import pages.CartViewPage;
import pages.GuestDetailsPage;
import pages.ShippingPage;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 04/04/14
 * Time: 4:46 PM
 * To change this template use File | Settings | File Templates.
 */
public class CheckOutSteps extends BaseSteps {



    @And("^he chooses to checkout$")
    public void he_chooses_to_checkout() throws Throwable {
      pageStore.get(CartViewPage.class).chooseToCheckOut();
    }

    @And("^he proceeds to checkout$")
    public void he_proceeds_to_checkout() throws Throwable {
        // Express the Regexp above with the code you wish you had
        pageStore.get(CartViewPage.class).proceedToCheckOut();
    }

    @And("^he chooses to continue as a new guest$")
    public void he_chooses_to_continue_as_a_new_guest() throws Throwable {
        // Express the Regexp above with the code you wish you had
        pageStore.get(CartViewPage.class).continueAsNewGuest();
    }

    @And("^he enter the details of the new guest as below:$")
    public void he_enter_the_details_of_the_new_guest_as_below(List<GuestDetails> guests) throws Throwable {
         pageStore.get(GuestDetailsPage.class).enterGuestDetailsUsing(guests.get(0));
    }

    @And("^he chooses to pay with a credit card$")
    public void he_chooses_to_pay_with_a_credit_card() throws Throwable {
        pageStore.get(BillingPage.class).chooseToPayWithACreditCard();
    }

    @And("^he enters the credit card details as follows:$")
    public void he_enters_the_credit_card_details_as_follows(List<CreditCardDetail> cardDetails) throws Throwable {
        pageStore.get(BillingPage.class).fillInCreditCardDetails(cardDetails.get(0)) ;
    }

    @And("^he chooses to proceed with the default shipping address$")
    public void he_chooses_to_proceed_with_the_default_shipping_address() throws Throwable {
        pageStore.get(ShippingPage.class).proceedWithDefaultShippingAddress();
    }



    public class GuestDetails {
        public String firstName;
        public String lastName;
        public String address;
        public String zipcode;
        public String city;
        public String state;
        public String phoneNumber;
    }

    public class CreditCardDetail {
        public String cardNumber;
        public String cardHolderName;
        public String expiryMonth;
        public String expiryYear;
        public String securityCode;

    }
}
