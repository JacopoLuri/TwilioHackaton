import { React, useState, useContext } from "react";
import styled from 'styled-components';
import { theme } from "../../data/theme";
import { Context } from '../../context/Context';
import MainImg from "../../Images/tavola1.png";

const StyledTopSection = styled.div`
    width: 100%;
    background-color: ${theme.color.primary};
    padding: ${theme.padding.standard};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.padding.double};
    color: ${theme.color.light};

    div {
        display: flex;
        flex-direction: column;
        gap: ${theme.padding.standard};
        max-width: ${theme.media.phone};
    }

    img {
        width: 100%;
    }

    h1 {
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeight.large};
        text-align: center;
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    @media (min-width: ${theme.media.phone}) {
        img {
            max-width: ${theme.media.phone};
        }
    }

    @media (min-width: ${theme.media.tablet}) {
        flex-direction: row;
        justify-content: center;
      
    
        div {
            justify-content: center;
            gap: ${theme.padding.double};
            max-width: ${theme.media.phone};
        }

        img {
            max-width: ${theme.media.phone};
        }
    }
`;

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.padding.double};
    width: 100%;
    max-width: ${theme.media.phone};
    padding: ${theme.padding.standard};

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }

    div {
        width: 100%;

        label {
            font-size: ${theme.fontSize.medium};
            line-height: ${theme.lineHeight.medium};
            color: ${theme.color.primary};
        }

        input, select {
            width: 100%;
            height: 54px;
            border: ${theme.borderWidth.medium} solid ${theme.color.primary};
            border-radius: ${theme.borderRadius.small};
            font-size: ${theme.fontSize.medium};
            line-height: ${theme.lineHeight.large};
            padding: ${theme.padding.standard};
        }
    }

     button {
            padding: ${theme.padding.standard};
            font-size: ${theme.fontSize.medium};
            font-weight: ${theme.fontWeight.bold};
            color: ${theme.color.light};
            border: 2px solid ${theme.color.primary};
            border-radius: ${theme.borderRadius.full};
            background-color: ${theme.color.primary};
            cursor: pointer;
            transition: all 500ms;
            width: 100%;

            &:hover {
                background-color: ${theme.color.tertiary};
                color: ${theme.color.secondary};
                border: ${theme.borderWidth.medium} solid ${theme.color.secondary};
                transform: scale(1.05);
            }
        }
`;

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledFormSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: ${theme.padding.standard};
`;

const Babysitter = () => {
    const context = useContext(Context)

// hooks & functions for form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [postcode, setPostcode] = useState("");
    const [buildingNumber, setBuildingNumber] = useState("");
    const [avaiability, setAvaiability] = useState("");
    const [skills, setSkills] = useState("");
    const [socialMedia, setSocialMedia] = useState("");

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleGender = (e) => setGender(e.target.value);
    const handleAge = (e) => setAge(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => parseInt(setPhone(e.target.value));
    const handleCity = (e) => setCity(e.target.value);
    const handleStreet = (e) => setStreet(e.target.value);
    const handlePostcode = (e) => setPostcode(e.target.value);
    const handleBuildingNumber = (e) => setBuildingNumber(e.target.value);
    const handleAvaiability = (e) => setAvaiability(e.target.value);
    const handleSkills = (e) => setSkills(e.target.value);
    const handleSocialMedia = (e) => setSocialMedia(e.target.value);

    const getBabysitters = () => (
        fetch('https://radiant-badlands-42962.herokuapp.com/babysitters')
            .then(response => response.json())
            .then(data => data)
    )

    const handleForm = (event) => {
        event.preventDefault();
        fetch('https://radiant-badlands-42962.herokuapp.com/babysitters', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: {
                    first: firstName,
                    last: lastName
                },
                phoneNumber: phone,
                email: email,
                address: {
                    street: street,
                    number: buildingNumber,
                    city: city,
                    postCode: postcode
                },
                socialMediaLink: socialMedia,
                dateOfAvailability: avaiability,
                gender: gender,
                age: age,
                skills: [skills]
            })
        })
            .then(response => {
                if (response.status === 201) {
                    getBabysitters().then(data => console.log(data))
                }
            })
    }

    return (
        <>
            <StyledTopSection>
                <img src={MainImg} alt="Babysitter" />
                <div>
                    <h1>Are you a babysitter?</h1>
                    <p>Do you want to be enlisted as a babysitter, hundreds of parents need your help!!</p>
                </div>
            </StyledTopSection>
            <StyledForm onSubmit={handleForm}>
                <StyledFormContainer>
                    <h2>Send your contacts to be enlisted in our team:</h2>
                    <div>
                        <label for="firstName">First Name</label>
                        <input onChange={(e) => handleFirstName(e)} type="text" id="firstName" required />
                    </div>
                    <div>
                        <label for="lastName">Last Name</label>
                        <input onChange={(e) => handleLastName(e)} type="text" id="lastName" required />
                    </div>
                    <StyledFormSection>
                        <div>
                            <label for="gender">Gender</label>
                            <select onChange={(e) => handleGender(e)} type="select" id="gender" required>
                                <option value="none">Select one...</option>
                                <option value="woman">Woman</option>
                                <option value="man">Man</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label for="age">Age</label>
                            <input onChange={(e) => handleAge(e)} type="number" id="age" required />
                        </div>
                    </StyledFormSection>
                    <div>
                        <label for="email">Email</label>
                        <input onChange={(e) => handleEmail(e)} type="email" id="email" required />
                    </div>
                    <div>
                        <label for="phoneNumber">Telephone</label>
                        <input onChange={(e) => handlePhone(e)} type="text" id="phoneNumber" required />
                    </div>
                    <div>
                        <label for="city">City</label>
                        <input onChange={(e) => handleCity(e)} type="text" id="city" required />
                    </div>
                    <div>
                        <label for="street">Street</label>
                        <input onChange={(e) => handleStreet(e)} type="text" id="street" required />
                    </div>
                    <StyledFormSection>
                        <div>
                            <label for="postCode">Postcode</label>
                            <input onChange={(e) => handlePostcode(e)} type="text" id="postCode" required />
                        </div>
                        <div>
                            <label for="buildingNumber">Building Number</label>
                            <input onChange={(e) => handleBuildingNumber(e)} type="number" id="buildingNumber" placeholder="Optional" />
                        </div>
                    </StyledFormSection>
                    <div>
                        <label for="avaiability">Avaiability</label>
                        <input onChange={(e) => handleAvaiability(e)} type="date" id="avaiability" required />
                    </div>
                    <div>
                        <label for="skills">Your Skills</label>
                        <input onChange={(e) => handleSkills(e)} type="text" id="skills" placeholder="Optional" />
                    </div>
                    <div>
                        <label for="socialMedia">Social Media</label>
                        <input onChange={(e) => handleSocialMedia(e)} type="text" id="socialMedia" placeholder="Optional" />
                    </div>
                    <button>Add</button>
                </StyledFormContainer>
            </StyledForm>
        </>
    )
}

export default Babysitter;