import {Document, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
  

const DocumentViewer = () => {

    const styles = StyleSheet.create({
        page: {
          display: 'flex',
          textAlign: 'center',
          marginVertical: 50,
          fontSize: 16,
        },
        header: {
            paddingBottom: 40,
            paddingTop: 20,
        },
        title: {
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        section: {
          marginVertical: 10,
        },
        label: {
          fontSize: 18,
          fontWeight: 'heavy',
        },
        item: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        footer: {
          marginTop: 20,
          paddingTop: 10,
        },
      });
    

    // State
    const [document, setDocument] = useState([]);

    // Params
    const {document_id} = useParams();

    // Fetch transaction from url and set transaction state
    const fetchDocument = async (urlAddress, documentState) => {
        try {
            const url = urlAddress;
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            await response.json()
            .then(response => {
                documentState(response)
            });
          } catch (error) {
            console.error(error.message);
          }
    }

     // fetch request
    useEffect(() => {
        fetchReceipt(`http://localhost:3001/documents/${document_id}`, setDocument);
        
    }, []);

    if (!document){
        return (
            <div>
            </div>
        )
    } else {

        let formatDate = '';

        return (
            <div className="flex flex-col items-end">
                <NavLink
                // Takes user back to account
                className='btn btn primary btn-wide'
                to={`/account/${transaction.account_number}`}>
                Back To Account
                </NavLink>
                <PDFViewer className="h-screen w-screen">
                    <Document>
                        <Page style={styles.page} size={{ width: 300, height: 540 }}>
                        <View>
                            <View style={styles.header}>
                                <Text style={styles.title}>Receipt</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.section}>Transaction # {transaction_id}</Text>
                                <Text style={styles.section}>{formatDate}</Text>
                                <Text style={styles.section}>Account # {transaction.account_number} </Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.section}>Details:</Text>
                                <Text>Unit {transaction.unit}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.label}>Total: ${total}</Text>
                            </View>
                        </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        )
    }
}

export default DocumentViewer;
